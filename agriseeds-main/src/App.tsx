import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import AboutPage from './components/AboutPage';
import DealersPage from './components/DealersPage';
import ResourcesPage from './components/ResourcesPage';
import NewsPage from './components/NewsPage';
import ArticleDetail from './components/ArticleDetail';
import ContactPage from './components/ContactPage';
import CategoryPage from './components/CategoryPage';
import { products } from './data/products';
import { newsArticles } from './data/news';
import { SeedProduct, NewsArticle } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<SeedProduct | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // URL-based navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      
      if (path === '/' || path === '/home') {
        setCurrentPage('home');
        setSelectedProduct(null);
        setSelectedArticle(null);
        setSelectedCategory(null);
      } else if (path === '/products') {
        const category = params.get('category');
        if (category) {
          setCurrentPage('category');
          setSelectedCategory(category);
        } else {
          setCurrentPage('products');
        }
        setSelectedProduct(null);
        setSelectedArticle(null);
      } else if (path.startsWith('/product/')) {
        const productId = path.split('/product/')[1];
        const product = products.find(p => p.id === productId);
        if (product) {
          setSelectedProduct(product);
          setCurrentPage('product-detail');
        }
      } else if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/dealers') {
        setCurrentPage('dealers');
      } else if (path === '/resources') {
        setCurrentPage('resources');
      } else if (path === '/news') {
        setCurrentPage('news');
      } else if (path.startsWith('/news/')) {
        const articleId = path.split('/news/')[1];
        const article = newsArticles.find(a => a.id === articleId);
        if (article) {
          setSelectedArticle(article);
          setCurrentPage('article-detail');
        }
      } else if (path === '/contact') {
        setCurrentPage('contact');
      }
    };

    // Handle initial load
    handlePopState();

    // Listen for browser navigation
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const updateURL = (page: string, params?: Record<string, string>) => {
    let url = `/${page === 'home' ? '' : page}`;
    
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }
    
    window.history.pushState({}, '', url);
  };

  const handleNavigate = (page: string, category?: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    setSelectedArticle(null);
    setSelectedCategory(category || null);
    
    if (page === 'category' && category) {
      updateURL('products', { category });
    } else {
      updateURL(page);
    }
    
    window.scrollTo(0, 0);
  };

  const handleViewProduct = (product: SeedProduct) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.history.pushState({}, '', `/product/${product.id}`);
    window.scrollTo(0, 0);
  };

  const handleViewArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    setCurrentPage('article-detail');
    window.history.pushState({}, '', `/news/${article.id}`);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (selectedProduct) {
      setSelectedProduct(null);
      setCurrentPage('products');
      updateURL('products');
    } else if (selectedArticle) {
      setSelectedArticle(null);
      setCurrentPage('news');
      updateURL('news');
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setCurrentPage('products');
      updateURL('products');
    }
  };

  const featuredProducts = products.filter(product => product.featured);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            featuredProducts={featuredProducts}
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
      case 'products':
        return (
          <ProductsPage 
            products={products}
            onViewProduct={handleViewProduct}
            onNavigate={handleNavigate}
          />
        );
      case 'category':
        return selectedCategory ? (
          <CategoryPage
            category={selectedCategory}
            products={products.filter(p => p.category === selectedCategory)}
            onViewProduct={handleViewProduct}
            onBack={handleBack}
          />
        ) : null;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct}
            onBack={handleBack}
          />
        ) : null;
      case 'about':
        return <AboutPage />;
      case 'dealers':
        return <DealersPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'news':
        return <NewsPage onViewArticle={handleViewArticle} />;
      case 'article-detail':
        return selectedArticle ? (
          <ArticleDetail 
            article={selectedArticle}
            onBack={handleBack}
          />
        ) : null;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage 
            featuredProducts={featuredProducts}
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        selectedCategory={selectedCategory}
      />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;