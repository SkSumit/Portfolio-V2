import Image from "next/image";

const Icons = (iconName, url) => {
  switch (iconName) {
    case "github":
      return (
        <a target="_blank" rel="noreferrer" href={url} className="mr-2">
          <Image
            src="/github-brands.svg"
            alt="github_logo"
            width={24}
            height={24}
          />
        </a>
      );
      break;
    case "url":
      return (
        <a target="_blank" rel="noreferrer" href={url} className="mr-2">
          <Image
            src="/external-link-alt-solid.svg"
            alt="external-link"
            width={24}
            height={24}
          />
        </a>
      );
      break;

    default:
      return <p> Could not load image.</p>;
      break;
  }
};
export default Icons;
