import React from 'react';
// import PropTypes from 'prop-types';

export default function Pet(props) {
  // If the animal is still loading,
  // we'll return early.
  if (props.catLoading || props.dogLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="animal">
      <header>
        <h2 className="animal-name">{props.name}</h2>
        <img src={props.imageURL} alt={props.imageDescription} />
      </header>
      <main>
        <h3>More about {props.name}</h3>
        <dl className="animal-attributes">
          <dt className="term-sex">Sex</dt>
          <dd className="def-sex">{props.sex}</dd>
          <dt className="term-age">Age</dt>
          <dd className="def-age">{props.age} years</dd>
          <dt className="term-breed">Breed</dt>
          <dd className="def-breed">{props.breed}</dd>
          <dt className="term-story">Story</dt>
          <dd className="def-story">{props.story}</dd>
        </dl>
        <button type="button" onClick={() => props.onAdoptPet()}>
          Adopt
        </button>
      </main>
    </section>
  );
}

// Pet.propTypes = {
//   name: PropTypes.string,
//   imageURL: PropTypes.string,
//   imageDescription: PropTypes.string,
//   sex: PropTypes.string,
//   age: PropTypes.number,
//   breed: PropTypes.string,
//   story: PropTypes.string
// };



