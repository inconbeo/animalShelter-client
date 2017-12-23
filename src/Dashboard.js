import React from 'react';
import {connect} from 'react-redux';
import {fetchCats, adoptCat} from './actions/cat';
import {fetchDogs, adoptDog} from './actions/dog';
import Pet from './components/pet'
export class DashBoard extends React.Component {
    
    componentDidMount() {
        Promise.all([
        this.props.dispatch(fetchCats()),
        this.props.dispatch(fetchDogs())
        ])
    }
    
render() {
    return (
      <div className="animals">
        <div className="row">
          <div className="col-6">
          {console.log(this.props.catToAdopt)}
            <Pet
              {...this.props.catToAdopt}
              onAdoptPet={() => this.props.dispatch(adoptCat())}
            />
          </div>
          <div className="col-6">
            <Pet
              {...this.props.dogToAdopt}
              onAdoptPet={() => this.props.dispatch(adoptDog())}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
    catLoading: state.cat.loading,
    dogLoading: state.dog.loading,
    catToAdopt: state.cat.data,
    dogToAdopt: state.dog.data
})

export default connect(mapStateToProps)(DashBoard);