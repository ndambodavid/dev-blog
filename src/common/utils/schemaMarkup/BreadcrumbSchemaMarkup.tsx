import Script from 'next/script';

const BreadcrumbSchemaMarkup = ({ items }: any) => {
  return (
    <Script
      id={'breadcrumb-schema'}
      type={'application/ld+json'}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item: { position: any; name: any; item: any; }) => {
            return {
              '@type': 'ListItem',
              position: item.position,
              name: item.name,
              item: item.item
            };
          })
        })
      }}
    />
  );
};

export default BreadcrumbSchemaMarkup;
