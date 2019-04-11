import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export const Global = createGlobalStyle`
  /* Global Font*/
  ${'' /* @import url('');

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
    text-rendering: optimizeLegibility;
  } */}

  /* Extra Small Mobile (320px) */
  @media screen and (min-width: ${theme.breakpoints.xs}) {
    body {
      font-size: calc(1em + 6 * ((100vw - 320px) / 680));
    }
  }
  
  /* Desktop (1000px) */
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    body {
      font-size: 1.3125em;
    }
  }

  h1,h2,h3,h4,h5,h6,p{
    color: ${theme.colors.primary};
  }

/* Global Resetters */
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

  html, body{
    width: 100%;
    height: 100%;
  }

	html,
	body,
	p,
	ol,
	ul,
	li,
	dl,
	dt,
	dd,
	blockquote,
	figure,
	fieldset,
	legend,
	textarea,
	pre,
	iframe,
	hr,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		${'' /* font-size: 100%; */}
		font-weight: normal;
	}

	ul {
		list-style: none;
	}

	button,
	input,
	select,
	textarea {
		margin: 0;
    outline: none;
	}

	a {
		text-decoration: none;
	}

	img,
	embed,
	iframe,
	object,
	video {
		height: auto;
		max-width: 100%;
	}

	audio {
		max-width: 100%;
	}

	iframe {
		border: 0;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
		text-align: left;
	}
`;
