// Model validation utilities
export const availableModels = [
  'shirt_baked.glb',
  '1_men_batik_shirt_short.glb', 
  'long_sleeve_batik_shirt_2.glb',
  'women_shirt_batik.glb'
]

export const validateModel = (modelPath) => {
  return availableModels.includes(modelPath)
}

export const getValidModel = (modelPath) => {
  if (validateModel(modelPath)) {
    return modelPath
  }
  // Return default model if invalid
  return 'shirt_baked.glb'
}

// Check if model file exists (client-side check)
export const checkModelExists = async (modelPath) => {
  try {
    const response = await fetch(`/${modelPath}`, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    console.warn(`Model ${modelPath} not found:`, error)
    return false
  }
}

// Model metadata for better user experience
export const modelMetadata = {
  'shirt_baked.glb': {
    name: 'Basic Shirt',
    size: 'Medium',
    complexity: 'Low',
    loadTime: 'Fast'
  },
  '1_men_batik_shirt_short.glb': {
    name: 'Men Short Sleeve',
    size: 'Medium',
    complexity: 'Medium',
    loadTime: 'Medium'
  },
  'long_sleeve_batik_shirt_2.glb': {
    name: 'Long Sleeve',
    size: 'Large',
    complexity: 'High',
    loadTime: 'Slow'
  },
  'women_shirt_batik.glb': {
    name: 'Women Shirt',
    size: 'Medium',
    complexity: 'Medium',
    loadTime: 'Medium'
  }
}
