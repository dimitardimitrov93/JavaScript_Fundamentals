function fileExtractor(filePath) {

    let extensionDotIndex = filePath.lastIndexOf('.');
    let fileExtension = filePath.substring(extensionDotIndex + 1);

    let fileNameStartIndex = filePath.lastIndexOf('\\');
    let fileName = filePath.substring(fileNameStartIndex + 1, extensionDotIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

fileExtractor('C:\\Internal\\training-internal\\Template.pptx');