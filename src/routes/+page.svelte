<script lang="ts">
	import JobCards from '$lib/components/JobCards.svelte';
	import PostCards from '../lib/components/PostCards.svelte';

	import type { PostCard } from '../type';
	import type { PostItem } from '../type';
	import type { Timeline } from '../type';
	import type { JobCard } from '../type';


	let post: PostItem[] = [
		{
			imgSrc: 'card-1.png',
			text: 'No amount of technology can convert a bad story into a good story.'
		},
		{
			imgSrc: 'card-2.png',
			text: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
		}
	];
	let post2: PostItem[] = [
		{
			imgSrc: 'card-3.png',
			text: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
		},
		{
			imgSrc: 'card-4.png',
			text: 'Your biggest regrets at 80 will be acts of omission.'
		}
	];
	let posts: PostCard[] = [
		{
			type: 'post',
			date: new Date('2023-12-01'),
			postItem: post
		},
		{
			type: 'post',
			date: new Date('2022-12-01'),
			postItem: post2
		}
	];

	let jobs: JobCard[] = [
		{
			type: 'job',
			imgSrc: '/logo.svg',
			jobLocation: 'San Francisco Bay Area',
			date: new Date('2023-11-01'),
			jobTitle: 'Co-Founder and CEO',
			jobType: 'Full-time. Remote',
			companyName: 'Duggup'
		},
		{
			type: 'job',
			imgSrc: '/company-1.png',
			jobLocation: 'San Francisco Bay Area',
			date: new Date('2022-07-01'),
			jobTitle: 'VP Engineering',
			jobType: 'Full-time',
			companyName: 'BetterUp'
		}
	];

	const timeline: Timeline[] = [...posts, ...jobs];
	timeline.sort((a, b) => b.date.getTime() - a.date.getTime());
	console.log('timeline', timeline);
</script>

<div class="w-full pt-10 md:pt-24 pb-10">
	<div class="flex flex-col md:flex-row xl:ml-28 items-center gap-10">
		<div class="flex flex-col items-center gap-2">
			<img
				src="/profile.png"
				class=" w-[120px] h-[120px] rounded-full before:border-2"
				alt="profile"
			/>

			<h3 class="text-xl">Krishna Kiran</h3>
		</div>
		<div class="flex flex-col max-w-[834px]">
			<div class="flex gap-5 md:justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
				<p
					class="flex-auto sm:self-start text-sm leading-6 text-neutral-900 max-w-[600px] max-md:max-w-full"
				>
					Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
					Engineering. I write hot-takes on building a business, shipping delightful products and
					accelerating product and career growth.
				</p>
				<div class="flex flex-col xl:text-right whitespace-nowrap basis-0 max-w-[150px]">
					<img loading="lazy" src="/logo.svg" class="sm:self-end w-9 aspect-square" alt="company" />
					<h1 class="mt-2 sm:ml-0 text-base font-bold text-black">Duggup</h1>
					<h3 class="self-start mt-1 ml-5 text-xs text-slate-500 max-md:ml-0">
						Co-Founder and CEO
					</h3>
				</div>
			</div>
			<div
				class="flex gap-5 pl-5 sm:justify-between mt-5 w-full text-sm leading-5 whitespace-nowrap text-neutral-600 max-md:flex-wrap max-md:max-w-full"
			>
				<p
					class="justify-center px-6 py-2 bg-white rounded border-solid shadow-sm border-[0.5px] border-neutral-600 max-md:px-5"
				>
					Follow
				</p>
				<div class="flex gap-4 md:justify-end md:pl-9">
					<div class="flex gap-1 justify-center my-auto">
						<div class="grow">My website</div>
						<img loading="lazy" src="/pointer.svg" class="my-auto w-4 aspect-square" alt="Link" />
					</div>
					<img loading="lazy" src="/dots.svg" class="w-7 aspect-square" alt="more options" />
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Timeline section -->

<div class="flex flex-col max-w-[987px] pb-10">
	{#each timeline as item}
		{#if item.type === 'post'}
			<PostCards cards={item.postItem} date={item.date} />
		{:else if item.type === 'job'}
			<JobCards jobs={item} />
		{/if}
	{/each}
</div>
