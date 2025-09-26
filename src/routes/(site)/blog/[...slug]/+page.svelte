<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Check from '@lucide/svelte/icons/check';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import Copy from '@lucide/svelte/icons/copy';
	import Laptop from '@lucide/svelte/icons/laptop';
	import TableOfContents from '@lucide/svelte/icons/table-of-contents';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import X from '@lucide/svelte/icons/x';
	import Zap from '@lucide/svelte/icons/zap';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Jonas Claes</title>
</svelte:head>

{#if data.ghostPost}
	<div class="ghost-content">
		{@html data.ghostPost.html}
	</div>
{/if}

<section class="overflow-hidden bg-slate-800/30 py-12 backdrop-blur-sm">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<a
			href="/blog"
			class="mb-8 inline-flex items-center gap-2 text-blue-400 transition-colors duration-300 hover:text-blue-300"
		>
			<ArrowLeft class="h-4 w-4" />Back to Blog
		</a>

		<header class="mb-12 text-center">
			<div class="mb-6 flex items-center justify-center gap-4">
				<span class="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
					Testing
				</span>
				<span class="text-slate-400">•</span>
				<span class="text-slate-400">January 15, 2024</span>
				<span class="text-slate-400">•</span>
				<span class="text-slate-400">8 min read</span>
			</div>

			<h1 class="mb-6 text-4xl leading-tight font-bold md:text-5xl">
				<span
					class="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
				>
					{data.post.title}
				</span>
			</h1>

			<!-- {#if data.post.description}
				<p class="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
					{data.post.description}
				</p>
			{/if} -->
		</header>

		<figure class="mb-12">
			<div class="overflow-hidden rounded-2xl">
				<!-- <img
					src={getAssetUrl(data.post.cover.url)}
					alt={data.post.cover.alternativeText}
					loading="eager"
					class="h-64 w-full object-cover md:h-96"
				/> -->
			</div>
			<!-- {#if data.post.cover.caption}
				<figcaption class="mt-3 text-center text-sm text-slate-400 italic">
					{data.post.cover.caption}
				</figcaption>
			{/if} -->
		</figure>
	</div>
</section>

<article class="py-12">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 rounded-xl border border-blue-500/20 bg-slate-800/50 p-8 backdrop-blur-sm">
			<p class="mb-0 text-lg leading-relaxed text-slate-300">
				In today's fast-paced development environment, having a robust test automation framework
				isn't just a luxury—it's a necessity. After years of building and maintaining test
				frameworks across various projects, I've learned what works, what doesn't, and what makes
				the difference between a framework that empowers teams and one that becomes a maintenance
				nightmare.
			</p>
		</div>

		<div class="mb-12 rounded-xl border border-blue-500/10 bg-slate-800/30 p-6 backdrop-blur-sm">
			<h2 class="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
				<TableOfContents class="h-6 w-6 text-blue-400" />Table of Contents
			</h2>
			<ul class="space-y-2 text-slate-300">
				<!-- {#each tableOfContents as item}
					<li>
						<a href="#{item.anchor}" class="text-blue-400 transition-colors hover:text-blue-300">
							{item.index + 1}. {item.heading}
						</a>
					</li>
				{/each} -->
				<li>
					<a href="#foundations" class="text-blue-400 transition-colors hover:text-blue-300"
						>1. Framework Foundations</a
					>
				</li>
				<li>
					<a href="#architecture" class="text-blue-400 transition-colors hover:text-blue-300"
						>2. Architecture Patterns</a
					>
				</li>
				<li>
					<a href="#tools" class="text-blue-400 transition-colors hover:text-blue-300"
						>3. Tool Selection</a
					>
				</li>
				<li>
					<a href="#implementation" class="text-blue-400 transition-colors hover:text-blue-300"
						>4. Implementation Strategy</a
					>
				</li>
				<li>
					<a href="#best-practices" class="text-blue-400 transition-colors hover:text-blue-300"
						>5. Best Practices</a
					>
				</li>
			</ul>
		</div>

		<section id="story-blocks" class="mb-16">
			<!-- {#each data.post.content || [] as storyBlock}
				{#if storyBlock && '__typename' in storyBlock}
					{#if storyBlock.__typename === 'ComponentStoryBlockText'}
						<StoryBlockText {...storyBlock} />
					{/if}
				{/if}
			{/each} -->
		</section>

		<section id="foundations" class="mb-16">
			<h2 class="mb-6 flex items-center gap-3 text-3xl font-bold text-white">
				<span
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
				>
					1
				</span>
				Framework Foundations
			</h2>

			<p class="mb-6 leading-relaxed text-slate-300">
				Before diving into code, it's crucial to understand what makes a test automation framework
				truly effective. A well-designed framework should be more than just a collection of test
				scripts—it should be a comprehensive ecosystem that supports your entire testing strategy.
			</p>

			<h3 class="mb-4 text-2xl font-semibold text-blue-300">Core Principles</h3>

			<p class="mb-6 leading-relaxed text-slate-300">
				Every successful framework is built on solid principles. Here are the non-negotiables I've
				learned through experience:
			</p>

			<ul class="mb-8 space-y-3 pl-6 text-slate-300">
				<li class="flex items-start gap-3">
					<span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></span>
					<span
						><strong class="text-white">Maintainability:</strong> Code should be easy to read, understand,
						and modify</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-400"></span>
					<span
						><strong class="text-white">Scalability:</strong> Framework should grow with your application
						and team</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400"></span>
					<span
						><strong class="text-white">Reliability:</strong> Tests should be deterministic and stable</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-400"></span>
					<span
						><strong class="text-white">Reusability:</strong> Components should be modular and reusable</span
					>
				</li>
			</ul>

			<div
				class="mb-8 overflow-hidden rounded-xl border border-blue-500/20 bg-slate-900/80 backdrop-blur-sm"
			>
				<div
					class="flex items-center justify-between border-b border-blue-500/20 bg-slate-800/50 px-6 py-3"
				>
					<span class="font-medium text-slate-300">BaseTest.ts</span>
					<button class="text-slate-400 transition-colors hover:text-white">
						<Copy class="h-4 w-4" />
					</button>
				</div>
				<pre class="overflow-x-auto p-6 text-sm">
                  <code class="text-slate-300">
{`export abstract class BaseTest {
  protected driver: WebDriver;
  protected config: TestConfig;
  
  async setUp(): Promise<void> {
    this.config = await ConfigManager.load();
    this.driver = await DriverFactory.create(this.config.browser);
    await this.driver.manage().window().maximize();
  }
  
  async tearDown(): Promise<void> {
    if (this.driver) {
      await this.driver.quit();
    }
  }
  
  protected async takeScreenshot(name: string): Promise<string> {
    const screenshot = await this.driver.takeScreenshot();
    const path = \`screenshots/\${name}-\${Date.now()}.png\`;
    await fs.writeFile(path, screenshot, 'base64');
    return path;
  }
}`}
                  </code>
                </pre>
			</div>

			<blockquote
				class="my-8 rounded-r-xl border-l-4 border-blue-400 bg-slate-800/30 py-4 pl-6 backdrop-blur-sm"
			>
				<p class="mb-3 text-lg text-slate-300 italic">
					"The best frameworks are invisible to the test writers. They provide powerful capabilities
					without getting in the way of expressing test intent clearly."
				</p>
				<footer class="text-slate-400">— Martin Fowler, Software Development Expert</footer>
			</blockquote>
		</section>

		<section id="architecture" class="mb-16">
			<h2 class="mb-6 flex items-center gap-3 text-3xl font-bold text-white">
				<span
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>2</span
				>
				Architecture Patterns
			</h2>

			<p class="mb-6 leading-relaxed text-slate-300">
				The architecture of your test framework will determine its long-term success. Let's explore
				the most effective patterns I've used in production environments.
			</p>

			<h3 class="mb-4 text-2xl font-semibold text-teal-300">Page Object Model (POM)</h3>

			<p class="mb-6 leading-relaxed text-slate-300">
				The Page Object Model remains one of the most valuable patterns for UI test automation. It
				encapsulates page-specific logic and elements, making tests more maintainable and readable.
			</p>

			<figure class="mb-8">
				<div class="overflow-hidden rounded-xl">
					<img
						src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
						alt="Diagram showing Page Object Model architecture"
						loading="lazy"
						class="h-64 w-full object-cover"
					/>
				</div>
				<figcaption class="mt-3 text-center text-sm text-slate-400 italic">
					Page Object Model separates test logic from page-specific implementation details
				</figcaption>
			</figure>

			<h4 class="mb-4 text-xl font-semibold text-white">Implementation Example</h4>

			<div
				class="mb-8 overflow-hidden rounded-xl border border-teal-500/20 bg-slate-900/80 backdrop-blur-sm"
			>
				<div class="border-b border-teal-500/20 bg-slate-800/50 px-6 py-3">
					<span class="font-medium text-slate-300">LoginPage.ts</span>
				</div>
				<pre class="overflow-x-auto p-6 text-sm">
                  <code class="text-slate-300">
{`export class LoginPage extends BasePage {
  private readonly emailInput = By.id('email');
  private readonly passwordInput = By.id('password');
  private readonly loginButton = By.css('[data-testid="login-btn"]');
  private readonly errorMessage = By.css('.error-message');
  
  async login(email: string, password: string): Promise<void> {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }
  
  async getErrorMessage(): Promise<string> {
    return await this.getText(this.errorMessage);
  }
  
  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.isEnabled(this.loginButton);
  }
}`}
                  </code>
                </pre>
			</div>

			<div class="mb-8 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
				<div class="flex items-start gap-3">
					<TriangleAlert class="mt-0.5 h-6 w-6 flex-shrink-0 text-cyan-400" />
					<div>
						<h4 class="mb-2 font-semibold text-cyan-300">Common Pitfall</h4>
						<p class="text-slate-300">
							Avoid putting assertions directly in page objects. Keep them focused on interactions
							and data retrieval. Assertions belong in your test methods.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="tools" class="mb-16">
			<h2 class="mb-6 flex items-center gap-3 text-3xl font-bold text-white">
				<span
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>3</span
				>
				Tool Selection
			</h2>

			<p class="mb-8 leading-relaxed text-slate-300">
				Choosing the right tools can make or break your automation efforts. Here's my current
				toolkit and why I recommend each component:
			</p>

			<div
				class="mb-8 overflow-hidden rounded-xl border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm"
			>
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead class="bg-slate-700/50">
							<tr>
								<th class="px-6 py-4 text-left font-semibold text-white">Tool</th>
								<th class="px-6 py-4 text-left font-semibold text-white">Category</th>
								<th class="px-6 py-4 text-left font-semibold text-white">Pros</th>
								<th class="px-6 py-4 text-left font-semibold text-white">Best For</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-slate-600/30">
							<tr>
								<td class="px-6 py-4 font-medium text-blue-300">Playwright</td>
								<td class="px-6 py-4 text-slate-300">Browser Automation</td>
								<td class="px-6 py-4 text-slate-300">Fast, reliable, multi-browser</td>
								<td class="px-6 py-4 text-slate-300">Modern web apps</td>
							</tr>
							<tr>
								<td class="px-6 py-4 font-medium text-blue-300">Jest</td>
								<td class="px-6 py-4 text-slate-300">Test Runner</td>
								<td class="px-6 py-4 text-slate-300">Great ecosystem, snapshots</td>
								<td class="px-6 py-4 text-slate-300">Unit & integration tests</td>
							</tr>
							<tr>
								<td class="px-6 py-4 font-medium text-blue-300">Allure</td>
								<td class="px-6 py-4 text-slate-300">Reporting</td>
								<td class="px-6 py-4 text-slate-300">Beautiful reports, integrations</td>
								<td class="px-6 py-4 text-slate-300">Stakeholder communication</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<h3 class="mb-4 text-2xl font-semibold text-cyan-300">Why Playwright?</h3>

			<p class="mb-6 leading-relaxed text-slate-300">
				After working with Selenium for years, switching to Playwright was a game-changer. Here's
				what makes it special:
			</p>

			<div class="mb-8 grid gap-6 md:grid-cols-2">
				<div class="rounded-xl border border-cyan-500/10 bg-slate-800/30 p-6 backdrop-blur-sm">
					<h4 class="mb-3 flex items-center gap-2 font-semibold text-white">
						<Zap class="h-5 w-5 text-green-400" />Speed & Reliability
					</h4>
					<p class="text-sm text-slate-400">
						Auto-waiting eliminates flaky tests, and parallel execution dramatically reduces test
						suite runtime.
					</p>
				</div>

				<div class="rounded-xl border border-cyan-500/10 bg-slate-800/30 p-6 backdrop-blur-sm">
					<h4 class="mb-3 flex items-center gap-2 font-semibold text-white">
						<Laptop class="h-5 w-5 text-blue-400" />Multi-Browser Support
					</h4>
					<p class="text-sm text-slate-400">
						Native support for Chromium, Firefox, and WebKit with consistent APIs across all
						browsers.
					</p>
				</div>
			</div>
		</section>

		<section id="implementation" class="mb-16">
			<h2 class="mb-6 flex items-center gap-3 text-3xl font-bold text-white">
				<span
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>4</span
				>
				Implementation Strategy
			</h2>

			<p class="mb-6 leading-relaxed text-slate-300">
				Building a framework is a journey, not a destination. Here's the step-by-step approach I
				recommend for teams starting their automation journey.
			</p>

			<div class="mb-8 space-y-6">
				<div class="flex gap-4">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>
						1
					</div>
					<div>
						<h4 class="mb-2 font-semibold text-white">Start Small, Think Big</h4>
						<p class="text-slate-400">
							Begin with a few critical user journeys. Focus on getting the foundation right before
							scaling up.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>
						2
					</div>
					<div>
						<h4 class="mb-2 font-semibold text-white">Establish Patterns</h4>
						<p class="text-slate-400">
							Create consistent patterns for common operations like navigation, form filling, and
							assertions.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>
						3
					</div>
					<div>
						<h4 class="mb-2 font-semibold text-white">Integrate Early</h4>
						<p class="text-slate-400">
							Get your tests running in CI/CD from day one. This ensures they remain stable and
							valuable.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>
						4
					</div>
					<div>
						<h4 class="mb-2 font-semibold text-white">Iterate and Improve</h4>
						<p class="text-slate-400">
							Regularly review and refactor your framework based on team feedback and changing
							requirements.
						</p>
					</div>
				</div>
			</div>

			<div class="mb-8 rounded-xl border border-green-500/30 bg-green-500/10 p-6">
				<div class="flex items-start gap-3">
					<CircleCheck class="mt-0.5 h-6 w-6 flex-shrink-0 text-green-400" />
					<div>
						<h4 class="mb-2 font-semibold text-green-300">Success Story</h4>
						<p class="mb-3 text-slate-300">
							At my previous company, we reduced regression testing time from 2 weeks to 2 hours by
							implementing a comprehensive automation framework. The key was starting with just 10
							critical test cases and gradually expanding.
						</p>
						<p class="text-sm text-slate-400">
							The framework now covers 80% of our test scenarios and has prevented dozens of
							production bugs.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="best-practices" class="mb-16">
			<h2 class="mb-6 flex items-center gap-3 text-3xl font-bold text-white">
				<span
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white"
					>5</span
				>
				Best Practices & Lessons Learned
			</h2>

			<p class="mb-8 leading-relaxed text-slate-300">
				After building frameworks for teams of various sizes, here are the practices that
				consistently lead to success:
			</p>

			<div class="mb-8 grid gap-8 md:grid-cols-2">
				<div>
					<h3 class="mb-4 flex items-center gap-2 text-xl font-semibold text-green-300">
						<Check class="h-5 w-5" />Do This
					</h3>
					<ul class="space-y-3 text-slate-300">
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400"></span>
							Write tests that focus on user behavior, not implementation details
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400"></span>
							Use data-testid attributes for reliable element selection
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400"></span>
							Implement proper logging and reporting from the start
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400"></span>
							Run tests in parallel to reduce execution time
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 flex items-center gap-2 text-xl font-semibold text-red-300">
						<X class="h-5 w-5" />Avoid This
					</h3>
					<ul class="space-y-3 text-slate-300">
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400"></span>
							Don't use Thread.sleep() or fixed waits
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400"></span>
							Avoid testing multiple scenarios in a single test
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400"></span>
							Don't ignore test failures or mark them as "known issues"
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400"></span>
							Never commit tests that aren't stable
						</li>
					</ul>
				</div>
			</div>

			<h3 class="mb-4 text-2xl font-semibold text-blue-300">Putting It All Together</h3>

			<p class="mb-6 leading-relaxed text-slate-300">
				Here's what a well-structured test looks like using all the principles we've discussed:
			</p>

			<div
				class="mb-8 overflow-hidden rounded-xl border border-blue-500/20 bg-slate-900/80 backdrop-blur-sm"
			>
				<div class="border-b border-blue-500/20 bg-slate-800/50 px-6 py-3">
					<span class="font-medium text-slate-300">user-login.spec.ts</span>
				</div>
				<pre class="overflow-x-auto p-6 text-sm">
                  <code class="text-slate-300">
{`describe('User Authentication', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  
  beforeEach(async () => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.navigate();
  });
  
  test('should login with valid credentials', async () => {
    // Arrange
    const user = TestDataFactory.createValidUser();
    
    // Act
    await loginPage.login(user.email, user.password);
    
    // Assert
    await expect(dashboardPage.welcomeMessage).toBeVisible();
    await expect(dashboardPage.userMenu).toContainText(user.name);
  });
  
  test('should show error for invalid credentials', async () => {
    // Arrange
    const invalidUser = TestDataFactory.createInvalidUser();
    
    // Act
    await loginPage.login(invalidUser.email, invalidUser.password);
    
    // Assert
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Invalid credentials');
  });
});`}
                  </code>
                </pre>
			</div>
		</section>

		<section class="mb-16">
			<h2 class="mb-6 text-3xl font-bold text-white">Conclusion</h2>

			<p class="mb-6 leading-relaxed text-slate-300">
				Building a modern test automation framework is both an art and a science. It requires
				technical expertise, but more importantly, it demands understanding your team's needs and
				your application's unique characteristics.
			</p>

			<p class="mb-8 leading-relaxed text-slate-300">
				Remember, the goal isn't to automate everything—it's to automate the right things in the
				right way. Start small, focus on value, and iterate based on feedback. Your future self (and
				your team) will thank you.
			</p>

			<div
				class="rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-teal-600/20 p-8"
			>
				<h3 class="mb-4 text-2xl font-bold text-white">Ready to Build Your Framework?</h3>
				<p class="mb-6 text-slate-300">
					I'd love to hear about your automation challenges and successes. Feel free to reach out if
					you have questions or want to discuss your specific use case.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="mailto:jonas@jonasclaes.be"
						class="rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:from-blue-500 hover:to-teal-500"
					>
						Get in Touch
					</a>
					<a
						href="https://github.com/jonasclaes"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg border border-blue-400/50 px-6 py-3 text-center font-medium text-blue-300 transition-all duration-300 hover:bg-blue-400/10"
					>
						View My Projects
					</a>
				</div>
			</div>
		</section>

		<div class="mb-12 flex flex-wrap gap-3">
			{#each ['Playwright', 'Testing', 'Automation', 'QA', 'TypeScript', 'Best Practices'] as tag}
				<span
					class="cursor-pointer rounded-full bg-slate-700/50 px-3 py-1 text-sm text-slate-300 transition-colors hover:bg-slate-600/50"
				>
					#{tag}
				</span>
			{/each}
		</div>

		<div class="rounded-xl border border-blue-500/20 bg-slate-800/50 p-8 backdrop-blur-sm">
			<div class="flex items-start gap-6">
				<div
					class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-xl font-bold text-white"
				>
					JC
				</div>
				<div>
					<h3 class="mb-2 text-xl font-bold text-white">Jonas Claes</h3>
					<p class="mb-4 text-slate-300">
						Software Engineer & Quality Engineering Expert with over 8 years of experience building
						robust test automation frameworks and scalable software solutions.
					</p>
					<div class="flex gap-4">
						<a
							href="https://github.com/jonasclaes"
							class="text-blue-400 transition-colors hover:text-blue-300"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/jonasclaes"
							class="text-blue-400 transition-colors hover:text-blue-300"
						>
							LinkedIn
						</a>
						<a
							href="mailto:jonas@jonasclaes.be"
							class="text-blue-400 transition-colors hover:text-blue-300"
						>
							Email
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>

<section class="bg-slate-800/30 py-20 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-12 text-center text-3xl font-bold">
			<span class="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
				Related Posts
			</span>
		</h2>

		<div class="grid gap-8 md:grid-cols-3">
			{#each [{ title: 'Microservices Testing Strategies', excerpt: 'Comprehensive approaches to testing distributed systems and microservices architectures.', category: 'Testing', readTime: '12 min read' }, { title: 'TypeScript Best Practices', excerpt: 'Essential patterns and practices for maintaining large-scale TypeScript applications.', category: 'Development', readTime: '15 min read' }, { title: 'Quality Engineering in Agile', excerpt: 'Integrating quality engineering practices into agile development workflows.', category: 'Quality', readTime: '7 min read' }] as post}
				<article
					class="cursor-pointer rounded-xl border border-blue-500/20 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-blue-400/40"
				>
					<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
						{post.category}
					</span>
					<h3 class="mt-4 mb-3 text-xl font-bold text-white transition-colors hover:text-blue-300">
						{post.title}
					</h3>
					<p class="mb-4 leading-relaxed text-slate-400">
						{post.excerpt}
					</p>
					<div class="flex items-center justify-between">
						<span class="text-sm text-slate-400">
							{post.readTime}
						</span>
						<span class="font-medium text-blue-400 transition-colors hover:text-blue-300">
							Read More →
						</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
