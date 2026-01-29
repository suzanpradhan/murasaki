'use client';
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { FormikErrors, FormikValues } from 'formik';
import { Add, CloseCircle, DocumentText1 } from 'iconsax-react';
import { usePathname } from 'next/navigation';
import { cn } from '../../../utils';
import { constants } from '../../core/constants';

export interface MultiUploaderType {
  id?: string;
  files?: File[];
  label?: string;
  required?: boolean;
  serverFiles?: ServerFileType[];
  name: string;
  largeDisplay?: boolean;
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>;
  onServerAttachmentRemove?: (attachment: ServerFileType) => void;
}

export interface AttachmentType {
  largeDisplay?: boolean;
  file: File;
  onRemove: () => void;
}

export interface ServerFileType {
  id: number;
  url: string;
  file_type: string;
}

const EachAttachment = (props: AttachmentType) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        'rounded-md bg-white cursor-pointer flex flex-col relative overflow-hidden justify-center items-center border-white border',
        props.largeDisplay ? `h-40 w-40` : 'h-28 w-28'
      )}
    >
      {props.file.type.startsWith('image') ? (
        <img
          src={URL.createObjectURL(props.file)}
          alt="attachment"
          className="object-cover w-full"
        />
      ) : (
        <DocumentText1
          size={40}
          variant="Bold"
          color="black"
          className="flex-1"
        />
      )}
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-white top-0 left-0 z-10"></div>
      <p className="text-xs text-dark whitespace-nowrap text-start absolute bottom-2 left-2 z-20">
        {props.file.name}
      </p>
      {!pathname.endsWith('gallery') ? (
        <CloseCircle
          size={20}
          variant="Bold"
          color="red"
          className="absolute top-2 right-2 z-30"
          onClick={props.onRemove}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

const ServerAttachment = ({
  largeDisplay,
  serverFile,
  onServerAttachmentRemove,
}: {
  serverFile: ServerFileType;
  largeDisplay?: boolean;
  onServerAttachmentRemove?: (attachment: ServerFileType) => void;
}) => {
  const pathname = usePathname();

  const filePathSplit = serverFile.url.split('/');
  const fileName = filePathSplit[filePathSplit.length - 1];

  return (
    <div
      className={cn(
        ' rounded-md bg-white cursor-pointer flex flex-col relative overflow-hidden justify-center items-center border-white border',
        largeDisplay ? `h-40 w-40` : 'h-28 w-28'
      )}
      onClick={() => {
        if (typeof window !== 'undefined' && serverFile) {
          if (serverFile.file_type.startsWith('image')) {
            window.open(serverFile.url, '_blank')?.focus();
          } else {
            window
              .open(constants.googleDocViewerUrl + serverFile.url, '_blank')
              ?.focus();
          }
        }
      }}
    >
      {serverFile.file_type.startsWith('image') ? (
        <img
          src={serverFile.url}
          alt="attachment"
          className="object-cover w-full h-full"
        />
      ) : (
        <DocumentText1
          size={40}
          variant="Bold"
          color="black"
          className="flex-1"
        />
      )}
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-white top-0 left-0 z-10 pointer-events-none"></div>
      <p className="text-xs text-dark whitespace-nowrap text-start absolute bottom-2 left-2 z-20 pointer-events-none">
        {fileName}
      </p>
      {!pathname.endsWith('gallery') ? (
        <CloseCircle
          size={20}
          variant="Bold"
          color="red"
          className="absolute top-2 right-2 z-30"
          onClick={() => {
            if (!onServerAttachmentRemove) return;
            onServerAttachmentRemove(serverFile);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

const MultiUploader = (props: MultiUploaderType) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      {props.label ? (
        <label htmlFor={props.id} className="text-sm mb-2 text-dark-500 w-fit">
          {props.label}
          {props.required ? '*' : ''}
        </label>
      ) : (
        <></>
      )}
      <div
        className={cn(
          `bg-blueWhite border border-primaryGray-300 rounded-lg p-4 max-w-5xl overflow-y-auto custom-scrollbar flex flex-wrap gap-2`,
          props.largeDisplay ? '' : 'max-h-96'
        )}
      >
        {props.serverFiles &&
          props.serverFiles.map((serverFile, index) => (
            <ServerAttachment
              key={index}
              largeDisplay={props.largeDisplay}
              onServerAttachmentRemove={props.onServerAttachmentRemove}
              serverFile={serverFile}
            />
          ))}

        {props.files &&
          Array.from(props.files).map((file, index) => (
            <EachAttachment
              key={index}
              largeDisplay={props.largeDisplay}
              file={file}
              onRemove={() => {
                if (props.files) {
                  const currentFiles = Array.from(props.files);
                  const index = currentFiles.indexOf(file);
                  if (index > -1) {
                    currentFiles.splice(index, 1);
                  }
                  props.setFieldValue?.(props.name, currentFiles);
                }
              }}
            />
          ))}
        {!pathname.endsWith('gallery') ? (
          <label
            htmlFor="uploader"
            className="w-28 h-28 rounded-md bg-white flex flex-col justify-center items-center overflow-hidden p-2 cursor-pointer"
          >
            <input
              type="file"
              id="uploader"
              className="hidden"
              multiple
              onChange={(e) => {
                if (!e.currentTarget.files) {
                  return;
                }
                if (props.files) {
                  const joined = Array.from(props.files).concat(
                    Array.from(e.currentTarget.files!)
                  );
                  props.setFieldValue?.(props.name, joined);
                } else {
                  props.setFieldValue?.(
                    props.name,
                    Array.from(e.currentTarget.files!)
                  );
                }
              }}
            />

            <Add size={54} color="black" className="flex-1" />
          </label>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MultiUploader;
