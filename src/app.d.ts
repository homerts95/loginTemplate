// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userID: string | null;
		}
		interface PageData {
			bio: string | null
		}
		// interface Platform {}
	}
}

export {};