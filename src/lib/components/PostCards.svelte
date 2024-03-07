<script lang="ts">
	import type { PostItem } from '../../type';
	export let date: Date;
	const month = date.toLocaleString('default', { month: 'short' });
	const year = date.getFullYear();
	const formattedDate = `${month} ${year}`;
	export let cards: PostItem[];
</script>

<div class="px-2 w-full max-md:max-w-full">
	<div class="flex gap-5 max-md:gap-0">
		<div class="flex flex-col md:w-1/5 max-md:ml-0">
			<div class="flex grow md:gap-5 md:justify-between md:pl-20 max-md:mt-2">
				<p class="my-auto text-xs text-right max-sm:w-[30px] text-slate-500">{formattedDate}</p>
				<div class="flex flex-col justify-center items-center px-2">
					<img
						loading="lazy"
						src="/line.svg"
						class="w-6 max-sm:h-64 md:w-4 aspect-[0.12]"
						alt="timeline"
					/>
					<divmax-md:w-full
						class="shrink-0 md:self-stretch w-[18px] h-[18px] bg-white rounded-full stroke-[3px] border-4 border-blue-700"
					></divmax-md:w-full>
					<img
						loading="lazy"
						src="/line.svg"
						class="w-6 max-sm:h-64 md:w-4 aspect-[0.12]"
						alt="timeline"
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-col md:ml-5 md:w-4/5 max-md:ml-0 max-md:w-[70%]">
			<div class="self-stretch md:px-5 md:py-6 my-auto max-md:mt-4 max-md:max-w-full">
				<div class="flex gap-5 max-md:flex-col max-md:gap-0">
					<div class="flex gap-5 max-md:flex-col max-md:gap-0">
						{#each cards as { imgSrc, text }}
							<div class="flex flex-col md:w-6/12 max-md:ml-0 max-md:w-full">
								<div
									class="flex flex-col grow pb-6 w-full text-sm leading-5 bg-white rounded-xl border-solid border-[0.5px] border-[color:var(--Primary-Neutral-02,#D0D5DD)] text-neutral-900 max-md:mt-10"
								>
									<img alt="card" loading="lazy" src={imgSrc} class="w-full aspect-[2.5]" />
									<div class="self-center mt-6 text-ellipsis px-3">
										{text}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
