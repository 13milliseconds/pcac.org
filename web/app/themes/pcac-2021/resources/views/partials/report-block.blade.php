<div class="col-md-4">
<div class="post-block report">
    <div class="date">
        {{ get_the_date('Y')}}
    </div>
    <a href="{{ the_permalink() }}">
        <div class="thumbnail">
            @php $cover = get_field('cover_image') @endphp
            @if($cover)
                <img src="{{ $cover['sizes']['large'] }}" />
            @endif
        </div>
    </a>
    <footer>
        <a class="button" href="{{ the_permalink() }}">Info</a>
        @php $pdf = get_field('post_file') @endphp
        @if($pdf)
        <a class="button" href="{{ $pdf }}" target="_blank">Full Report</a>
        @endif
    </footer>
    <h4>{{ the_title() }}</h4>
</div>
</div>