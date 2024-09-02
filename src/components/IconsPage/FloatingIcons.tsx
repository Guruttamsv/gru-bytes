import Spline from "@splinetool/react-spline";
import "../CSS/IconsPage/FloatingIcons.css";

interface FloatingIconsProps {
  mobile?: boolean;
}

const FloatingIcons: React.FC<FloatingIconsProps> = ({ mobile = false }) => {
  return (
    <div className="work-grid">
      <Spline
        scene={
          mobile
            ? "https://draft.spline.design/ooYEPpHBtdmeZ0jG/scene.splinecode"
            : "https://draft.spline.design/yGcjFrlDIRCckVmW/scene.splinecode"
        }
      />
    </div>
  );
};

export default FloatingIcons;
