<script lang="ts">
	import type { JobCard } from '../../type';
	// The prop 'cards' will receive the array of card data
	export let jobs: JobCard;
	const month = jobs?.date.toLocaleString('default', { month: 'short' });
	const year = jobs?.date.getFullYear();
	const formattedDate = `${month} ${year}`;
</script>

<div class="px-2 w-full max-md:pr-5 max-md:max-w-full">
	<div class="flex gap-5 max-md:gap-0">
		<div class="flex flex-col md:w-[21%] max-md:ml-0 max-md:pl-9">
			<div class="flex grow md:gap-5 md:justify-between max-md:mt-8">
				<div
					class="hidden md:flex flex-col flex-1 my-auto text-xs sm:text-right max-w-[50px] md:max-w-[150px] text-slate-500"
				>
					<img
						alt="company"
						loading="lazy"
						src={jobs.imgSrc}
						class="md:self-end w-8 md:w-12 aspect-square"
					/>
					<h2 class="mt-2 text-xs md:text-base font-bold text-neutral-900">{jobs?.companyName}</h2>
					<div class="  mt-1 xl:whitespace-nowrap">{jobs?.jobLocation}</div>
					<div class=" self-end">
						Joined
						<br />
						{formattedDate}
					</div>
				</div>
				<div class="flex flex-col md:justify-center mr-3 items-center py-px basis-0">
					<img
						loading="lazy"
						alt="arrow"
						src="arrow.svg"
						class=" md:w-8 aspect-[5.26] stroke-[1.5px] stroke-slate-400"
					/>
					<img
						loading="lazy"
						src="/line2.svg"
						class="aspect-[0.08] w-2 md:w-[5px]"
						alt="timeline"
					/>
					<div
						class="shrink-0 self-stretch bg-white border-[6px] border-blue-600 rounded-full h-[27px] w-[27px] stroke-[9px]"
					></div>
					<img
						loading="lazy"
						src="/line2.svg"
						class="aspect-[0.08] w-3 md:w-[5px]"
						alt="timeline"
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-[70%] max-md:pt-5">
			<div
				class="flex flex-col justify-center self-stretch px-5 py-5 my-auto w-full bg-white rounded-xl shadow-sm max-md:pr-5 max-md:mt-10 max-md:max-w-full"
			>
				<div
					class="flex flex-col md:hidden flex-1 my-auto text-xs sm:text-right max-w-[250px] md:max-w-[150px] text-slate-500"
				>
					<img
						alt="company"
						loading="lazy"
						src={jobs.imgSrc}
						class="md:self-end w-8 md:w-12 aspect-square"
					/>
					<h2 class="mt-2 text-xs md:text-base font-bold text-neutral-900">{jobs?.companyName}</h2>
					<div class="  mt-1 xl:whitespace-nowrap">{jobs?.jobLocation}</div>
					<div class="">
						Joined
						<br />
						{formattedDate}
					</div>
				</div>
				<div class="text-xl font-bold leading-8 text-neutral-900 max-md:max-w-full">
					{jobs?.jobTitle}
				</div>
				<div class="mt-2 text-xs text-slate-500 max-md:max-w-full">{jobs.jobType}</div>
			</div>
		</div>
	</div>
</div>
