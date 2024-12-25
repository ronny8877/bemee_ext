

// Create context menu item
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'save-to-collection',
    title: 'Save to Collection',
    contexts: ['page', 'link']
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'save-to-collection') {
    const url = info.linkUrl || info.pageUrl;
    if (url && tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        type: 'SHOW_COLLECTION_SELECTOR',
        url
      });
    }
  }
});

// Handle keyboard shortcut
chrome.commands.onCommand.addListener((command, tab) => {
  if (command === 'save-bookmark' && tab?.id) {
    chrome.tabs.sendMessage(tab.id, {
      type: 'SHOW_COLLECTION_SELECTOR',
      url: tab.url
    });
  }
});

// Function to extract metadata from a webpage
export async function extractMetadata(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    
    const baseUrl = new URL(url).origin;
    const title = doc.title;
    let favicon = doc.querySelector('link[rel*="icon"]')?.getAttribute('href');
    const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content');
    
    // Handle relative paths
    if (favicon && !favicon.startsWith('http')) {
      favicon = favicon.startsWith('/') 
        ? `${baseUrl}${favicon}`
        : `${baseUrl}/${favicon}`;
    }
    
    return {
      title,
      favicon,
      ogImage
    };
  } catch (error) {
    console.error('Error extracting metadata:', error);
    return {
      title: url,
      favicon: null,
      ogImage: null
    };
  }
}