import { getStoryblokApi } from "@storyblok/react";
import Fuse from "fuse.js";

async function fetchStories() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    starts_with: "",
  });
  return data.stories;
}

async function getContentList() {
  const stories = await fetchStories();

  const contentList = stories.map((story) => {
    // console.log("story", story);
    if (story.content?.body !== undefined) {
      return {
        title: story.name,
        link: story.full_slug,
      };
    }
  });

  return contentList.filter((content) => content !== undefined);
}

async function searchContent(query) {
  const contentList = await getContentList();

  const fuse = new Fuse(contentList, {
    keys: ["title", "content"],
  });

  const results = fuse.search(query);

  return results.map((result) => {
    // console.log("story result", result);
    return ({
      title: result.item.title,
      link: result.item.link,
    })
  });
}

export default searchContent;
