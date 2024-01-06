export type EditorViewerProps = { isViewer: boolean };

export enum MODE {
  RESPONSE_VIEWER = 'response-viewer',
  REQUEST_EDITOR = 'request-editor',
  HEADERS_EDITOR = 'headers-editor',
  VARIABLES_EDITOR = 'variables-editor',
}
