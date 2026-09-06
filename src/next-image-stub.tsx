export default function Image({ src, alt, fill, sizes, ...props }: any) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }
  return <img src={src} alt={alt} {...props} />;
}
