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
            ? "https://draft.spline.design/i3-sZKSN5ll5Xdn6/scene.splinecode"
            : "https://draft.spline.design/LsWl9jTGnwTF-ZhE/scene.splinecode"
        }
      />
    </div>
  );
};

export default FloatingIcons;
