// place files you want to import through the `$lib` alias in this folder.

export type GhostAuthor = {
	id: string;
	name: string;
	slug: string;
	profile_image: string | null;
	cover_image: string | null;
	bio: string | null;
	website: string | null;
	location: string | null;
	facebook: string | null;
	twitter: string | null;
	meta_title: string | null;
	meta_description: string | null;
	url: string;
};

export type GhostTag = {
	id: string;
	name: string;
	slug: string;
	description: string | null;
	feature_image: string | null;
	visibility: string;
	meta_title: string | null;
	meta_description: string | null;
	url: string;
};

export type GhostPost = {
	id: string;
	uuid: string;
	title: string;
	slug: string;
	html: string;
	comment_id: string;
	feature_image: string;
	feature_image_alt: string | null;
	feature_image_caption: string | null;
	featured: boolean;
	visibility: string;
	created_at: string;
	updated_at: string;
	published_at: string;
	custom_excerpt: string | null;
	codeinjection_head: string | null;
	codeinjection_foot: string | null;
	custom_template: string | null;
	canonical_url: string | null;
	authors: GhostAuthor[];
	tags: GhostTag[];
	primary_author: GhostAuthor;
	primary_tag: GhostTag | null;
	url: string;
	excerpt: string;
	reading_time: number;
	access: boolean;
	og_image: string | null;
	og_title: string | null;
	og_description: string | null;
	twitter_image: string | null;
	twitter_title: string | null;
	twitter_description: string | null;
	meta_title: string | null;
	meta_description: string | null;
	email_subject: string | null;
};
