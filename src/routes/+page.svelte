<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { countWords } from 'alfaaz';

	let text;

	function wordCount(text) {
		if (text == undefined) {
			return '0';
		} else {
			return countWords(text);
		}
	}

	function characterCount(text) {
		if (text == undefined) {
			return '0';
		} else {
			return text.length;
		}
	}

	onMount(() => {
		if (browser) {
			const savedText = localStorage.getItem('text');
			if (savedText !== null) {
				text = savedText;
			}
		}
	});

	$: if (browser && text !== undefined) {
		localStorage.setItem('text', text);
	}
</script>

<svelte:head>
	<title>Word Counter</title>
</svelte:head>

<main>
	<p class="word-count center">{wordCount(text)} words, {characterCount(text)} characters</p>
	<!-- svelte-ignore a11y_autofocus -->
	<textarea class="center" autofocus bind:value={text}></textarea>
</main>
