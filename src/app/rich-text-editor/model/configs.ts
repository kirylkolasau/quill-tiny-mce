export interface IRichTextEditorToolbar {
	formatting?: {
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
	};
	formatselect?: {
		h1?: boolean;
		h2?: boolean;
		h3?: boolean;
		h4?: boolean;
		h5?: boolean;
		h6?: boolean;
	};
	placeholder?: string;
	height?: number;
}
