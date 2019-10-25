function setup() {
    if (!localStorage.getItem('projects')) {
      localStorage.setItem('projects', JSON.stringify(myLibrary));
    }
  }