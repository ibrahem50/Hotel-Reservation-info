import React, { Component, createContext } from 'react';
import items from './data'

export const RoomContext = createContext();

export class RoomProvider extends Component {
    state = { 
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }
    //getData
    componentDidMount(){
        //this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true );
        this.setState({
            rooms,featuredRooms,sortedRooms:rooms,loading:false
        })
    }

    formatData (items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(img => {
                return img.fields.file.url
            });
            let room = {...item.fields,images,id};
            return room;
        });
        return tempItems;
    }
    render() { 
        return ( 
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
         );
    }
}

export const RoomConsumer = RoomContext.Consumer;