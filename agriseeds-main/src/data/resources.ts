import { Resource } from '../types';

export const resources: Resource[] = [
  {
    id: 'resource-001',
    title: 'Corn Planting Guide 2025',
    description: 'Comprehensive guide covering optimal planting dates, spacing, and best practices for corn production.',
    category: 'planting-guide',
    downloadUrl: '/resources/corn-planting-guide.pdf',
    fileType: 'pdf'
  },
  {
    id: 'resource-002',
    title: 'Soybean Pest Management',
    description: 'Complete pest identification and management strategies for soybean production.',
    category: 'pest-management',
    downloadUrl: '/resources/soybean-pest-management.pdf',
    fileType: 'pdf'
  },
  {
    id: 'resource-003',
    title: 'Harvest Optimization Tips',
    description: 'Video series on maximizing harvest efficiency and grain quality.',
    category: 'harvest-tips',
    downloadUrl: '/resources/harvest-optimization.mp4',
    fileType: 'video'
  },
  {
    id: 'resource-004',
    title: 'Grain Storage Best Practices',
    description: 'Essential guide for proper grain storage to maintain quality and prevent losses.',
    category: 'storage',
    downloadUrl: '/resources/grain-storage-guide.pdf',
    fileType: 'pdf'
  }
];