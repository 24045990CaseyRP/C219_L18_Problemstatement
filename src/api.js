const diplomas = [
  {
    id: "it",
    name: "Information Technology",
    modules: [
      { 
        id: "c218", 
        name: "UI/UX Design for Apps", 
        description: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.", 
        lecturer: { name: "Azhar Kamar", title: "Lecturer" } 
      },
      { 
        id: "c346", 
        name: "Mobile App Development", 
        description: "In this module, students will learn the basics of creating Android Applications.", 
        lecturer: { name: "Derek Lee", title: "Lecturer" } 
      }
    ]
  },
  {
    id: "dft",
    name: "Financial Technology",
    modules: [
      { 
        id: "c237", 
        name: "Software Application Development", 
        description: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.", 
        lecturer: { name: "Hannah Lim", title: "Lecturer" } 
      },
      { 
        id: "c372", 
        name: "Payment Technologies", 
        description: "This module introduces students to different payment technologies and systems.", 
        lecturer: { name: "Magdalene Lim", title: "Senior Lecturer" } 
      }
    ]
  }
];

export function getDiplomas() {
  return diplomas.map(d => ({ id: d.id, name: d.name }));
}

export function getDiploma(diplomaId) {
  return diplomas.find(d => d.id.toLowerCase() === diplomaId.toLowerCase());
}

export function getModule({ diplomaId, moduleId }) {
  const diploma = diplomas.find(d => d.id.toLowerCase() === diplomaId.toLowerCase());
  return diploma?.modules.find(m => m.id.toLowerCase() === moduleId.toLowerCase());
}