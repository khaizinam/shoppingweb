<?php function auto_version($file='')
    {
        if(!file_exists($file))
            return $file;
     
        $mtime = filemtime($file);
        return $file.'?'.$mtime;
    }
?>