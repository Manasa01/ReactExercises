import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">{song.title}
                    </div>
                </div>

            );
        })
    }
    render() {
        // console.log(this.props);
        return (<div className="ui divided list">{this.renderList()}</div>);
    }

}

//to get specific data from redux store
//by convention called as mapStateToProps - here, the state in reduxStore is mapped to props of SongList
const mapStateToProps = (state) => {
    // console.log(state);
    return { songs: state.songs };
}
export default connect(mapStateToProps,{selectSong})(SongList);

//connect wraps the actionCreators with dispatch...
// selectSong = (params)=>{
//     return store.dispatch(selectSong(params));
// }

// ƒ () {
//     return dispatch(actionCreator.apply(void 0, arguments));
//   }