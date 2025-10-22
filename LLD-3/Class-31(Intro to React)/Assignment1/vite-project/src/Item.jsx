/*

Note : these questions will do string matching and to avoid confusion please write the exact text

You are given Packing List component
Your Task is to create -> Item component that
accepts two props name and isPacked.
It should render -> name and if ispacked is true then print : "'✔'" and ❌ if false

*/

import React from 'react';

export default function Item({ name, isPacked }) {
	return (
		<div>
			{name} {isPacked ? "'✔'" : '❌'}
		</div>
	);
}
