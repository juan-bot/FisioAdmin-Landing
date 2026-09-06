export default function Image({ src, alt, fill, sizes, ...props }: any) {
  const base = import.meta.env.BASE_URL || '/';
  const fullSrc = src.startsWith('/') ? base.replace(/\/$/, '') + src : src;

  if (fill) {
    return (
      <img
        src={fullSrc}
        alt={alt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }
  return <img src={fullSrc} alt={alt} {...props} />;
}
