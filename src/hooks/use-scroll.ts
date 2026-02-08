export const useScroll = () => {
  const scrollToSection = (id: string) => {
    // Scroll to the very top if "top" is passed
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // We use the ID to find the section and let the CSS scroll-margin handle the gap
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollToSection };
};