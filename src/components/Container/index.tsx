import React from 'react';
import type { ReactNode } from 'react';

// props
type ContainerProps = {
	children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
	<div
		style={{
			maxWidth: 'var(--size-max-width)',
			margin: '0 auto',
			padding: 'var(--space-2xl) var(--size-gutter)'
		}}
	>
		{children}
	</div>
);

export default Container;
