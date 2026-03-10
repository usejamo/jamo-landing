import "./MobileBlobBackground.css";

const MobileBlobBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="mobile-blob mobile-blob--coral" />
    <div className="mobile-blob mobile-blob--indigo" />
    <div className="mobile-blob mobile-blob--teal" />
  </div>
);

export default MobileBlobBackground;
