import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

export function Section(props) {
  const { title, children } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
