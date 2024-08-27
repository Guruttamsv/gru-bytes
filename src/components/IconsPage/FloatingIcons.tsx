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
            ? "https://prod.spline.design/HkSKzMYuK5rJjs5j/scene.splinecode"
            : "https://prod.spline.design/rVN18yVnsmMEqX3w/scene.splinecode"
        }
      />
    </div>
  );
};

export default FloatingIcons;
