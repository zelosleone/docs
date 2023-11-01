import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
      <div
        className={
          "overflow-hidden py-10 nx-border-t dark:nx-border-neutral-800 contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400"
        }
      >
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-start justify-center gap-5">
              <GolemLogo />

              <div className="flex justify-center gap-5">
                {socials.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="nx-h-7 nx-rounded-md nx-transition-colors nx-text-gray-600 dark:nx-text-gray-400 nx-px-2 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 border grid place-items-center dark:nx-border-neutral-700 contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="text-center text-sm leading-5">
                <div>© {year} Ziverge Inc.</div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 lg:col-span-2 lg:mt-0">
              <nav>
                <h3 className="text-sm font-semibold leading-6">Golem</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {golem.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="text-sm leading-6 nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav>
                <h3 className="text-sm font-semibold leading-6">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {support.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="text-sm leading-6 nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function GolemLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 113.5" height={25}>
      <g>
        <g>
          <path
            fill="currentColor"
            d="m139.9,35.85c-5.68,5.82-8.71,13.5-8.52,21.63.39,16.11,14.07,29.22,30.51,29.22h29.35v-31.86h-28.84v8.89h19.95v14.07h-20.54c-11.44,0-21.1-9.07-21.52-20.22-.23-5.77,1.86-11.24,5.87-15.4,4-4.17,9.38-6.47,15.15-6.47h29.94v-8.89h-29.94c-8.11,0-15.71,3.21-21.41,9.03Z"
          />
          <path
            fill="currentColor"
            d="m230.89,25.7c-17.12,0-31.05,13.93-31.05,31.05s13.93,31.05,31.05,31.05,31.05-13.93,31.05-31.05-13.93-31.05-31.05-31.05Zm0,52.81c-12,0-21.76-9.76-21.76-21.76s9.76-21.76,21.76-21.76,21.77,9.76,21.77,21.76-9.76,21.76-21.77,21.76Z"
          />
          <path
            fill="currentColor"
            d="m279.44,77.79c0-2.58,0-8.59,0-8.63V26.91h-8.89v59.87h48.97v-8.89l-31.45-.08s-5.4,0-8.61,0Z"
          />
          <polygon
            fill="currentColor"
            points="379.07 26.82 327.15 26.82 327.15 86.69 379.07 86.69 379.07 86.69 379.07 77.8 335.96 77.8 335.96 58.23 367.99 58.23 367.99 49.34 367.99 49.34 335.96 49.34 335.96 35.71 379.07 35.71 379.07 26.82"
          />
          <path
            fill="currentColor"
            d="m440.68,33.36s-20.38,15.57-20.62,15.57-20.62-15.57-20.62-15.57l-9.32-7.16v60.5h8.89v-42.32l12.67,9.58,8.37,6.49,8.37-6.49,12.67-9.58v42.32h8.89V26.19l-9.32,7.16Z"
          />
        </g>
        <g>
          <polygon
            fill="currentColor"
            points="28.97 107.34 29.31 106.9 31.96 103.54 32.54 102.81 30.15 101.88 29.22 101.52 23.05 99.12 18.03 107.99 30.02 113.5 28.97 107.38 28.97 107.34"
          />
          <path
            fill="currentColor"
            d="m43.34,99.73l-8.45,3.1-.47.17.21.54.42,1.11.62,1.63.08.21h-.03s-.25.14-.25.14l-.09.04-.14.07-1.06.52-2.98,1.47-.08.04.11.13,1.53,1.84.39.47-1.06,2.29,20.84-5.52c.03-.1-2.51-10.75-2.45-10.87l-7.14,2.62Z"
          />
          <path
            fill="currentColor"
            d="m50.62,59.27l-2.54,1.43,1.94,2.24-13.83-5.4,5.28,7.56,2.37,3.38h0s2.77,3.97,2.77,3.97l-7.1-1.12,2.36,3.31v.02h.02l7.61,4.02h0l-12.15-2.76h0c-.7.96-3.58,3.25-4.6,4.8-.4,2.44-2.85,11.86-2.85,11.86l3.74,1.09,6.08,1.77h-.12s-.05,0-.05,0l-11.68-.5h0l-4.33,2.38h0s0,0,0,0c0,0,0,0,0,0,.01,0,.02,0,.05.02.31.09,1.73.48,3.42.94.91.25,1.9.52,2.85.78,1.46.4,2.79.76,3.57.97.08.02.17.05.24.06.3.08.47.13.47.13h0l10.14-2.91,3.91-1.12,2.23-.64h.03c0-.11,1.2-2.51,1.2-2.51h0c-.26-.26-4.19-4.16-4.34-4.32h0s2.61.2,2.61.2l2.85.23,4.27-3.24,4.27,3.24,2.85-.23,2.6-.21h0s-4.08,4.06-4.34,4.32h0s1.2,2.41,1.2,2.51l.07.02,2.17.62,3.87,1.11,10.17,2.92h.03s.17-.04.47-.12c.06-.02.14-.04.2-.06.77-.21,2.1-.57,3.56-.97.96-.26,1.96-.53,2.88-.79,1.69-.46,3.1-.85,3.42-.94,0,0,0,0,0,0,.03,0,.05-.02.06-.02l-4.34-2.39h0l-11.68.5h-.17s6.25-1.81,6.25-1.81l3.57-1.04s-2.45-9.42-2.85-11.86c-1.02-1.55-3.9-3.83-4.6-4.8h0s-12.14,2.76-12.14,2.76h0l7.61-4.02h.01s2.36-3.32,2.36-3.32h0s-7.1,1.12-7.1,1.12l2.8-3.94h0s8.25-13.3,8.25-13.3l-10.92,8.53,1.27-3.44-9.54-2.2-4.65-1.07-2.38,1.33-1.63.92Zm-4.97,28.53h0l-7.61-3.48-4.34,7.93,1.08-8.9v-.09s-.25-.35-.25-.35h0l-1.24-1.67,4.29,1.22.25.07,5.46-2.89h0s-1.56,3.12-1.56,3.12l3.96,5.06h-.02Zm25.1-8.16h0s5.46,2.88,5.46,2.88l.24-.07,4.3-1.22-1.24,1.67h0l-.26.35v.09s1.09,8.9,1.09,8.9l-4.34-7.93-7.62,3.48h-.02s3.96-5.05,3.96-5.05l-1.56-3.12Z"
          />
          <polygon
            fill="currentColor"
            points="90.93 99.14 84.73 101.54 83.84 101.89 81.47 102.81 81.47 102.81 82.04 103.53 84.7 106.9 85.05 107.34 85.04 107.38 84.02 113.33 83.99 113.5 95.98 107.99 90.96 99.12 90.93 99.14"
          />
          <path
            fill="currentColor"
            d="m79.82,107.26l-1.05-.52-.24-.12-.27-.13.09-.24.61-1.58.44-1.16.19-.5-.08-.03-.42-.15-8.5-3.12-7.06-2.59s0,0,0,.01c.01.31-2.48,10.76-2.45,10.86l20.8,5.51h0s.03,0,.03,0l-.02-.04-1.04-2.25.38-.45,1.51-1.81.15-.18-.11-.05-2.96-1.46Z"
          />
          <path
            fill="currentColor"
            d="m104.36,57.96l9.65-12-.83-2.33-4.68,1.83-4.54,1.78,7.89-9.07-11.83-13.54-5.61.91,1.44-2.94h-.01s0,0,0,0l-7.83-.24-1.65-.05h0l.84-3.81h0s0,0,0,0l.69-3.13-15.5-14.09-15.25-1.27-2.2,3.98h0l-3.82,6.91-10.78-7.49h.01s0,0,0,0l-15.5,10.24.31,2.65.32,2.74.39,3.39-7.71-5,1.23,6.7-4.53-.89-12.7,14.96h0s7.89,9.06,7.89,9.06l-4.55-1.78h0s-4.67-1.83-4.67-1.83l-.84,2.33h0s9.65,12,9.65,12l-6.74-3.76h0s-2.14-1.19-2.14-1.19l.72,22.37,8.72,9.31,13.13,2.27,4.17-6.29-6.02-2.39h0s-7.37,1.16-7.37,1.16l2.15-1.78h0s1.26-1.05,1.26-1.05l5.41-.56.89-2.59-3.73-1.4h0s-10.33,2.21-10.33,2.21l.87-2.55,1.4-4.1,6.34-2.32-.97-1.82h0s-1.72-3.24-1.72-3.24l10.78,4.59h0s7.3-4.36,7.3-4.36l1.48-4.77-4.92-1.45-1.74-4.35-10.85-2.32,2.2-14.43.17-1.13-6.96,2.12,6.76-7.31.56,3.02.36,1.95.16.86,2.37,12.88,5.91-3.72h0s.66-.41.66-.41l.42,2.39h0s.7,3.98.7,3.98l.52,2.92,4.49,2.41,10.15,5.44h0s.06.07.06.07l-.03-.05h.04s3.33-.6,3.33-.6l.62-.11,4.42-.79h6s9.4-.02,9.4-.02l3.24-5.74h0s.01-.03.01-.03h.01s4.83-4.14,4.83-4.14h0s1.39-1.2,1.39-1.2l2.46,4.96,8.44-17.21,1-2.03,1.36-2.77.78-1.58,7.32,6.85-8.81-2.33-.68,2.64-1.88,7.34,7.23,1.58-11.43,4.95-3.31,8.56-3.42-6.98,1.67,10.57,7.3,4.37,10.78-4.59-1.72,3.25-.97,1.82,6.34,2.31,1.39,4.1.87,2.55-10.34-2.21-3.73,1.4.89,2.59,5.41.57,1.27,1.05,2.14,1.78-7.37-1.15-6.03,2.39,4.18,6.29,13.13-2.27,8.72-9.31.72-22.37-2.14,1.19-6.74,3.76Zm-36.23-40.2l5.35.05-4.43,1.78-4.13,3.77,3.21-5.61Zm.36,3.98l4.23-.56,3.01,3.72-4.08-1.48-2.24.46-8.41,5.5,7.49-7.64Zm-23.57,2.6l3.77,6.01,3.52,1.63-3.47-.1-5.3-4.79-4.94-.92,6.42-1.83Zm-13.19,13.49l.85-9.75,7.75,2.53,3.51,1.03,4.18,2.78,6.53,4.34-7.04,5.24-8.44.63-7.33-6.8Zm23.81,13.07l-10.99-4.39,11.03,1.92,11.02-1.92-11.06,4.39Zm17.09-6.27l-8.44-.63-7.04-5.24,6.53-4.34,4.18-2.78,3.51-1.03,7.75-2.53.85,9.75-7.33,6.8Z"
          />
          <polygon fill="currentColor" points="18.17 17.4 18.16 17.4 18.16 17.4 18.17 17.4" />
          <path
            fill="currentColor"
            d="m32.88,37.33l4.54,3.42c-.56-1.06-.88-2.31-.88-3.66,0-2.45,1.09-4.6,2.72-5.84l-5.75-1.84-.63,7.92Z"
          />
          <path
            fill="currentColor"
            d="m48.38,36.06c.04.34.09.68.09,1.04,0,1.98-.71,3.74-1.83,5.01h.07s5.08-3.79,5.08-3.79l-3.41-2.26Z"
          />
          <path
            fill="currentColor"
            d="m44.91,34.44c-1.19,0-2.16.92-2.16,2.06s.97,2.06,2.16,2.06,2.16-.92,2.16-2.06-.97-2.06-2.16-2.06Z"
          />
          <path
            fill="currentColor"
            d="m72.41,31.26c1.63,1.24,2.72,3.39,2.72,5.84,0,1.34-.33,2.59-.88,3.66l4.54-3.42-.63-7.92-5.75,1.84Z"
          />
          <path
            fill="currentColor"
            d="m63.29,36.06l-3.41,2.26,5.08,3.79h.07c-1.12-1.27-1.83-3.03-1.83-5.01,0-.36.04-.7.09-1.04Z"
          />
          <path
            fill="currentColor"
            d="m66.76,34.44c-1.19,0-2.16.92-2.16,2.06s.97,2.06,2.16,2.06,2.16-.92,2.16-2.06-.97-2.06-2.16-2.06Z"
          />
        </g>
      </g>
    </svg>
  )
}

const support = [
  { name: "Blog", href: "https://www.golem.cloud/blog" },
  { name: "Help Center", href: "https://support.golem.cloud" },
]

const golem = [
  { name: "About", href: "https://www.golem.cloud" },
  { name: "Console", href: "https://console.golem.cloud" },
]

const socials = [
  {
    name: "Github",
    href: "https://github.com/golemcloud",
    icon: GitHubLogoIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/golemcloud",
    icon: TwitterLogoIcon,
  },
  {
    name: "Email",
    href: "mailto:contact@golem.cloud",
    icon: EnvelopeClosedIcon,
  },
  {
    name: "Discord",
    href: "https://discord.gg/UjXeH8uG4x",
    icon: DiscordLogoIcon,
  },
] as const
