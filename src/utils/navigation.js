// Navigation utility functions

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const handleAnchorNavigation = (anchor, currentPath = '/') => {
  if (currentPath !== '/') {
    // If not on home page, navigate to home first then scroll
    window.location.href = `/${anchor}`;
  } else {
    // If on home page, just scroll to section
    const sectionId = anchor.replace('#', '');
    scrollToSection(sectionId);
  }
};

export const navigateToContact = () => {
  const currentPath = window.location.pathname;
  if (currentPath === '/') {
    scrollToSection('contact');
  } else {
    window.location.href = '/contact';
  }
};

export const navigateToSection = (sectionId) => {
  const currentPath = window.location.pathname;
  if (currentPath === '/') {
    scrollToSection(sectionId);
  } else {
    window.location.href = `/#${sectionId}`;
  }
}; 