/**
 * Calculate reading time in minutes based on text content
 * Uses average reading speed of 200 words per minute
 */
export function calculateReadingTime(content: string | string[]): string {
  let text = ''
  
  if (Array.isArray(content)) {
    text = content.join(' ')
  } else {
    text = content
  }
  
  // Remove HTML tags if any
  text = text.replace(/<[^>]*>/g, '')
  
  // Count words (split by whitespace and filter out empty strings)
  const words = text.trim().split(/\s+/).filter(word => word.length > 0)
  const wordCount = words.length
  
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  
  // Return formatted string
  if (minutes === 1) {
    return '1 min read'
  }
  return `${minutes} min read`
}

