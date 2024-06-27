import { parseISO } from 'date-fns';

export const convertEventsToDateEvents = ( events = [] ) => {

    //Convertimos las fechas de los eventos de string a objetos javascript
    return events.map( event => {

        event.end = parseISO( event.end );
        event.start = parseISO( event.start );

        return event;
    });
}