/* eslint-disable react-hooks/immutability */
// src/components/CKEditorComponent.jsx
import { useEffect, useRef } from 'react';

const CKEditorComponent = ({ value, onChange, placeholder = "Nhập nội dung..." }) => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    // Load CKEditor script
    if (!window.CKEDITOR) {
      const script = document.createElement('script');
      script.src = 'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js';
      script.async = true;
      script.onload = () => initEditor();
      document.body.appendChild(script);
    } else {
      initEditor();
    }

    return () => {
      // Cleanup
      if (editorInstanceRef.current) {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, []);

  // Update content when value changes from outside
  useEffect(() => {
    if (editorInstanceRef.current && value !== editorInstanceRef.current.getData()) {
      editorInstanceRef.current.setData(value || '');
    }
  }, [value]);

  const initEditor = () => {
    if (!editorRef.current || editorInstanceRef.current) return;

    const editor = window.CKEDITOR.replace(editorRef.current, {
      height: 400,
      language: 'vi',
      
      // Toolbar configuration - Tối ưu cho SEO
      toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
      ],

      // Remove unused buttons
      removeButtons: 'Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Flash,Smiley,PageBreak,Iframe,ShowBlocks,About',

      // Cho phép tất cả HTML tags (quan trọng cho SEO)
      allowedContent: true,
      
      // Extra plugins cho SEO
      extraPlugins: 'image2,uploadimage,justify,font,colorbutton,panelbutton,floatpanel,listblock,richcombo',
      
      // Image upload (nếu cần)
      // filebrowserUploadUrl: '/api/upload-image',
      // filebrowserUploadMethod: 'form',

      // Format tags - quan trọng cho SEO
      format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div',

      // Heading styles - tối ưu SEO
      stylesSet: [
        { name: 'Heading 1', element: 'h1' },
        { name: 'Heading 2', element: 'h2' },
        { name: 'Heading 3', element: 'h3' },
        { name: 'Heading 4', element: 'h4' },
        { name: 'Heading 5', element: 'h5' },
        { name: 'Heading 6', element: 'h6' },
        { name: 'Paragraph', element: 'p' },
        { name: 'Code', element: 'code' },
        { name: 'Quote', element: 'blockquote' }
      ],

      // Content CSS
      contentsCss: [
        'https://cdn.ckeditor.com/4.22.1/standard-all/contents.css',
        'body { font-family: Arial, sans-serif; font-size: 14px; }'
      ],

      // Placeholder
      editorplaceholder: placeholder,
    });

    editor.on('change', () => {
      const data = editor.getData();
      onChange(data);
    });

    editor.on('instanceReady', () => {
      editor.setData(value || '');
    });

    editorInstanceRef.current = editor;
  };

  return (
    <div>
      <textarea
        ref={editorRef}
        defaultValue={value}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default CKEditorComponent;