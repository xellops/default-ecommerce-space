import { useEffect, useState } from "react";
import { Story } from "./story.interface";
import { BarStory } from "./BarStory";

const testStories: Story[] = [
  {
    title:
      "Xellops Tech is giving away free discounts for all people in the room",
    tags: "tech, pro",
    storeName: "Xellops Technologies",
    storeId: "bc993211-6e99-4cf7-b309-c16d0b2192b3",
    countryCode: "NG",
  },
];

export const StoryBar = () => {
  const [stories, setStories] = useState<Story[]>([]);

  const fetchStories = async () => {
    try {
      setStories(testStories);
    } catch (error) {
      // Do nothing really.
    }
  };

  useEffect(() => {
    fetchStories();
  });

  return (
    <div className="">
      {stories.length ? (
        <div>
          {stories.map((story, i) => (
            <BarStory story={story} key={`story-${story.countryCode}-${i}`} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
