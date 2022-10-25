import PropTypes from 'prop-types';

export function Section(props) {
  const { title, children } = props;
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
