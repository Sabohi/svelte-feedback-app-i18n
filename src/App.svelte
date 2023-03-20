<script>
	import {
		setupI18n,
		isLocaleLoaded,
		locale,
		dir,
		_,
	} from "./services/i18n";
	import LocaleSelector from './components/LocaleSelector.svelte';
	// import { FeedbackStore } from './stores';
	import FeebackList from './components/FeebackList.svelte';
  	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	setupI18n();
	$: if (document.dir !== $dir) {
		document.dir = $dir;
	}
	$: if ($isLocaleLoaded) {
    	document.title = $_("app.title");
  	}
	// let feedback = [
	// 	{
	// 		id: 1,
	// 		rating: 10,
	// 		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	// 	},
	// 	{
	// 		id: 2,
	// 		rating: 9,
	// 		text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
	// 	},
	// 	{
	// 		id: 3,
	// 		rating: 5,
	// 		text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
	// 	}
	// ];

	// $:count = feedback.length;
	// $:average = feedback.reduce((a, { rating }) => a + rating, 0)/feedback.length;

	// const handleAddFeedback = (e) => {
	// 	feedback = [e.detail, ...feedback];
	// };
</script>

{#if $isLocaleLoaded}
<main class="container">
	<p>{$_("hello_user", {values: {name: "Adam"}})}</p>
	<LocaleSelector
		value={$locale}
		on:locale-changed={e =>
		{
			console.log("============", e.detail, locale);
			return setupI18n({ withLocale: e.detail }) 
		}
			
		}
	/>	
	<FeedbackForm />
	<FeedbackStats />
	<FeebackList />
</main>
{:else}
  <p>Loading...</p>
{/if}

<style>
</style>