interface UiLineProps {
  width?: string;
  height?: string;
  color?: string;
  opacity?: number;
  className?: string;
}

export const UiLine = ({
  width = '20px',
  height = '1px',
  color = '#222222',
  opacity = 1,
  className = '',
}: UiLineProps) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        background: color,
        opacity,
      }}
    />
  );
};
