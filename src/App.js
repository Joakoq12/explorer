
import { useState } from "react";

const people = [ 
  {
    id: 'people-01', 
    title: 'Juan Perez'
  },
  {
    id: 'people-2', 
    title: 'Carlos Martinez'
  },
  {
    id: 'people-03',
    title: 'Juan Lopez'
  },
  {
    id: 'people-04', 
    title: 'Laura Gimenez'
  },
  {
    id: 'people-05', 
    title: 'John Alejandro'
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];






function App() {

  const [data, setData] = useState([... people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);

  const [currentOption, setCurrentOption] = useState('All');


  function handleClick(e) {
    const op = e.target.name; 

    switch (op) {
      case 'all' :
        setData([...people , ...calendar, ...emails])
        setCurrentOption('all');
        break;
        
        case 'people' :
        setData([...people])
        setCurrentOption('people');
        break; 
        
        case 'calendar' :
        setData([...calendar])
        setCurrentOption('calendar');
        break;
        
        
        case 'emails' :
        setData([...emails])
        setCurrentOption('emails');
        break;

                


        default:


    }

  }
  

  return (
    <div className='App'>

    <button onClick={handleClick} name='all'>All</button>
    <button onClick={handleClick} name='people'>People</button>
    <button onClick={handleClick} name='calendar'>Calendar</button>
    <button onClick={handleClick} name='emails'>E-Mail</button>
    
        

    
    

    </div>
  )
}

export default App;

