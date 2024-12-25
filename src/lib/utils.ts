// interface PageMetadata {
//   title: string;
//   description: string | null;
//   image: string | null;
//   favicon: string;
// }

// interface ChromeTab {
//   id?: number;
//   url?: string;
// }

// interface ScriptInjectionResult {
//   result: PageMetadata;
// }

// export async function scrapePageMetadata(tab: ChromeTab): Promise<PageMetadata> {
//   if (!tab.id || !tab.url) {
//     throw new Error('Invalid tab: missing id or url');
//   }

//   const result = await chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     func: (): PageMetadata => {
//       const getMetaContent = (selectors: string[]): string | null => {
//         for (const selector of selectors) {
//           const element = document.querySelector(selector) as HTMLMetaElement | null;
//           if (element?.content) return element.content;
//         }
//         return null;
//       };

//       const getFavicon = (): string => {
//         const links = document.querySelectorAll<HTMLLinkElement>('link[rel*="icon"]');
//         const favicon = Array.from(links).find(link => 
//           link.rel.includes('icon') && !link.rel.includes('apple')
//         )?.href;
        
//         return favicon || '/favicon.ico';
//       };

//       return {
//         title: document.title,
//         description: getMetaContent([
//           'meta[name="description"]',
//           'meta[property="og:description"]',
//           'meta[name="twitter:description"]'
//         ]),
//         image: getMetaContent([
//           'meta[property="og:image"]',
//           'meta[name="twitter:image"]',
//           'meta[name="thumbnail"]'
//         ]),
//         favicon: getFavicon()
//       };
//     }
//   }) as Promise<ScriptInjectionResult[]>;

//   const metadata = result[0].result;
//   const baseUrl = new URL(tab.url);
  
//   // Handle relative paths
//   if (metadata.favicon && !metadata.favicon.startsWith('http')) {
//     metadata.favicon = new URL(metadata.favicon, baseUrl.origin).href;
//   }
//   if (metadata.image && !metadata.image.startsWith('http')) {
//     metadata.image = new URL(metadata.image, baseUrl.origin).href;
//   }

//   return metadata;
// }