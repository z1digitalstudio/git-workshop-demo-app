const appName = `Demo App`;

export default function pageTitle(pageName?: string): string {
  if (!pageName) {
    return appName;
  }

  return `${pageName} | ${appName}`;
}
