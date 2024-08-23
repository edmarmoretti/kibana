/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import mime from 'mime';
import type { ResponseHeaders } from '@kbn/core/server';
import type { File } from '../../common/types';

interface Args {
  file: File;
  fileName?: string;
}
//Edmar Moretti - alterar o tempo de cache
export function getDownloadHeadersForFile({ file, fileName }: Args): ResponseHeaders {
  return {
    'content-type':
      (fileName && mime.getType(fileName)) ?? file.data.mimeType ?? 'application/octet-stream',
    'cache-control': 'max-age=86400, immutable',
  };
}

export function getDownloadedFileName(file: File): string {
  // When creating a file we also calculate the extension so the `file.extension`
  // check is not really necessary except for type checking.
  if (file.data.mimeType && file.data.extension) {
    return `${file.data.name}.${file.data.extension}`;
  }
  return file.data.name;
}
