export default function BlogLoading() {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#fdfcf9",
      gap: 20,
    }}>
      <div style={{ position: "relative", width: 48, height: 48 }}>
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "3px solid rgba(201,168,76,0.15)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "3px solid transparent",
          borderTopColor: "#c9a84c",
          animation: "blog-spin 0.8s linear infinite",
        }} />
      </div>
      <span style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#c9a84c",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        Loading
      </span>
      <style>{`
        @keyframes blog-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
