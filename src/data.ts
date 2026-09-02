export type Project = { title: string; category: string; description: string; stack: string[]; color: string; live: string; repo: string }
export type Post = { title: string; category: string; date: string; tags: string[]; summary: string; content: string }

export const projects: Project[] = [
  { title: 'Atlas Cloud', category: 'Architecture', description: 'A real-time observability workspace for distributed teams.', stack: ['React', 'AWS', 'WebSockets'], color: 'from-cyan-400/25 to-blue-500/5', live: '#contact', repo: 'https://github.com' },
  { title: 'Nori Finance', category: 'Full stack', description: 'Calm, transparent cash-flow tooling for independent businesses.', stack: ['Next.js', 'Postgres', 'Stripe'], color: 'from-emerald-400/25 to-teal-500/5', live: '#contact', repo: 'https://github.com' },
  { title: 'Field Notes', category: 'Product', description: 'Offline-ready research capture for field teams and scientists.', stack: ['React', 'Python', 'Django'], color: 'from-violet-400/25 to-indigo-500/5', live: '#contact', repo: 'https://github.com' }
]

export const sampleXML = `<post>
  <title>Designing systems that feel inevitable</title>
  <category>Engineering</category>
  <date>2026-08-16</date>
  <tags>architecture, product thinking, systems</tags>
  <summary>Good engineering is less about adding options and more about making the right path obvious.</summary>
  <content><![CDATA[<p>A system earns trust when its shape mirrors the way people already think. Start with the questions your users ask, then build the smallest dependable answer.</p><h2>Fewer, stronger decisions</h2><p>Constraints are not a limitation. They are a way to create room for the details that matter.</p>]]></content>
</post>`

export const starterPost: Post = { title: 'The quiet leverage of a well-made interface', category: 'Design systems', date: '2026-08-02', tags: ['design', 'frontend'], summary: 'Interface quality is a compounding investment in clarity, confidence, and speed.', content: '<p>Every interaction teaches people what to expect next. Great products make that lesson nearly invisible.</p>' }
