<script>
    import { _ } from "svelte-i18n";
    import { FeedbackStore } from '../stores';
    $:count = $FeedbackStore.length;
	$:average = $FeedbackStore.reduce((a, { rating }) => a + rating, 0)/$FeedbackStore.length;
</script>

<div class="feedback-stats">
    <h4>{$_("stats.reviews", {values: {n: count}})}</h4>
    <h4>{$_("stats.average")}: {average || 0}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>