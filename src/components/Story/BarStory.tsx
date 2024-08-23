import { FaX } from "react-icons/fa6";
import { Story } from "./story.interface";
import { Container } from "../Container";

interface BarStoryProps {
  story: Story;
  onClose?: () => void | Promise<void>;
}

export const BarStory = ({ story, onClose }: BarStoryProps) => {
  return (
    <div className="bg bg-blue-200 py-2">
      <Container>
        <div className="flex items-center justify-center relative max-w-screen-xl mx-auto">
          <h4 className="text-center px-2">{story.title}</h4>

          <button
            onClick={onClose}
            className="border-0 bg-none absolute right-2 md:right-4"
          >
            <FaX />
          </button>
        </div>
      </Container>
    </div>
  );
};
